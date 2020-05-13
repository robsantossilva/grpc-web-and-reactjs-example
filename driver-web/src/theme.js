import {createMuiTheme} from "@material-ui/core";
import {teal} from "@material-ui/core/colors";

const defaultTheme = createMuiTheme({
    palette: {
        background: {
            default: '#263238',
            paper: '#263238'
        },
        primary: {
            main: '#f9a825'
        },
        type: "dark"
    },


});

const theme = {
    ...defaultTheme,
};

export default theme;