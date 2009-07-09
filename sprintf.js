function sprintf () {
    // variable attributes
    if (!arguments || arguments.length < 1) {
        return ""  
    }
    if (arguments[1] && arguments[1] instanceof Array ) {
        arguments=[arguments[0]].concat(arguments[1])
    }
   
    var fmt = arguments[0]
    var output = ""
    var current_arg = 1
    for (var pos=0; pos < fmt.length; ++pos) {
        if (fmt[pos] != '%') {
            output += fmt[pos]
                continue
        }
        switch (fmt[++pos]) {
            case '%':
                output += '%'
                break
            case 'o': //octal
                output += '0'+arguments[current_arg++].toString(8)
                break
            case 'x': //hex
                output += '0x'+arguments[current_arg++].toString(16)
                break
            case 'b': //binary
               output += '0b'+arguments[current_arg++].toString(2)
               break
            default :
                output += arguments[current_arg++].toString()
           }
    }//for
    return output
}//sprintf

