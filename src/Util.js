export default class Util {
    static formatDateTime = (date) => {
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: true,
          };

        return new Intl.DateTimeFormat('en-US', options).format(date);  
    } 

    static titleCase(input) {
        if (!input) {
            return '';
        } else {
            return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
        }
    }
}