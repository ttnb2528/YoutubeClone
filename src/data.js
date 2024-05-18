export const API_KEY = "AIzaSyDcog_4Hg1oSUyYCYeqeH_c0IMD-nEhlGM";

export const value_converter = (value) => {
    if (value >= 1000000000) {
        return `${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
    } else {
        return value;
    }
}