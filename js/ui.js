(function (window) {
    window.opspark = window.opspark || {};
    
    var _ = window._;
    
    window.opspark.ui = {
        makeControls: makeControls
    };
    
    function makeControls(values, settings, view, reset) {
        _.where(settings, {'allowInput': true}).forEach(function (setting) {
            var id, formControls;
            
            id = setting.id;
            formControls = $("#formControls");
            
            switch (setting.type) {
                case 'range':
                    formControls.append( '<label id="label-' + id + '" for="' + id + '">' + setting.label + ' : ' + setting.value + '</label>');
                    formControls.append('<input class="control slider" id="' + id + '" value="' + setting.value + '" step="' + setting.step + '" min="' + setting.min + '" max="' + setting.max + '" type="range" style="width: 200px; height: 20px; -webkit-appearance: slider-horizontal; writing-mode: bt-lr;">');
                    break;
                case 'boolean':
                    formControls.append( '<label id="label-' + id + '" for="' + id + '">' + setting.label + ' : ' + (setting.value === 1 ? "on" : "off") + '</label>');
                    formControls.append('<input class="control checkbox" id="' + id + '" value="' + setting.value + '" checked type="checkbox" style="width: 200px; height: 20px; writing-mode: bt-lr;">');
                    break;
                default:
                    break;
            }
        });
        
        $(".checkbox").each(function(index) {
            $(this).on("change", function() {
                var val, label;
                
                label = $("#label-" + this.id);
                $(this).val(val = ($(this).is(':checked')) ? 1 : 0);
                var labelVal = (val === 1 ? "on" : "off");
                label.text(label.text().replace(/:(.*)/, ": " + labelVal));
                updateControl(this);
            });
        });
        
        $(".slider").each(function(index) {
            $(this).on("input", function() {
                var label = $("#label-" + this.id);
                label.text(label.text().replace(/:(.*)/, ": " + $(this).val()));
            });
            
            $(this).on("change", function() {
                var id, val;
                
                id = this.id,
                val = $(this).val();
                
                values[id] = parseFloat(val);
                
                if (_.where(settings, {'id': id})[0].requireRestart) {
                    reset();
                }
            });
        });
        
        function updateControl(control) {
            var id, val;
                
            id = control.id,
            val = $(control).val();
            
            values[id] = parseFloat(val);
            
            if (_.where(settings, {'id': id})[0].requireRestart) {
                reset();
            }
        }
    }
    
}(window));