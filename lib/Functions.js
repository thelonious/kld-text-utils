exports.format = function(fmt, value) {
    var args = arguments;

    var fill = function(text, fill_character, width) {
        var padRight = (width < 0);
        var result = text;

        if (width < 0) {
            width = -width;
        }

        if (text.length < width) {
            var diff = width - text.length;
            var filler = new Array(diff + 1).join(fill_character);

            result = (padRight) ? filler + text : text + filler;
        }

        return result;
    };

    // need to take position into account
    // need to take character width into account
    return fmt.replace(
        /{([^}]+)}/g,
        function(match, content) {
            var parts = content.split(/:/);
            var valueIndex = parts[0] - 0;
            var value = args[valueIndex + 1];
            var format = parts[1] || "s0";
            var type = format[0];
            var width = format.substring(1) - 0;
            var result = match;

            switch (type) {
                case "b":
                    result = fill(value.toString(2), "0", -width);
                    break;

                case "s":
                    result = fill(value.toString(), " ", width);
                    break;

                case "x":
                    result = fill(value.toString(16), "0", -width);
                    break;

                case "X":
                    result = fill(value.toString(16).toUpperCase(), "0", -width);
                    break;

                default:
                    result = value;
            }

            return result;
        }
    );
};

exports.repeat = function(text, count) {
    return new Array(count + 1).join(text);
};
