const R40 = [1.00, 1.06, 1.12, 1.18, 1.25, 1.32, 1.40, 1.50, 1.60, 1.70, 1.80, 1.90, 2.00, 2.12, 2.24, 2.36, 2.50, 2.65, 2.80, 3.00, 3.15, 3.35, 3.55, 3.75,
    4.00, 4.25, 4.50, 4.75, 5.00, 5.30, 5.60, 6.00, 6.30, 6.70, 7.10, 7.50, 8.0, 8.5, 9.0, 9.5,
];

const R80 = [1.000, 1.030, 1.060, 1.090, 1.120, 1.150, 1.180, 1.220, 1.250, 1.280, 1.320, 1.360,
    1.400, 1.450, 1.500, 1.550, 1.600, 1.700, 1.750, 1.800, 1.850, 1.900, 2.000, 2.060,
    2.120, 2.180, 2.240, 2.300, 2.360, 2.430, 2.500, 2.580, 2.650, 2.720, 2.800, 2.900,
    3.000, 3.070, 3.150, 3.250, 3.350, 3.450, 3.550, 3.650, 3.750, 3.870, 4.000, 4.120,
    4.250, 4.370, 4.500, 4.620, 4.750, 4.870, 5.000, 5.150, 5.300, 5.450, 5.600, 5.800,
    6.000, 6.150, 6.300, 6.500, 6.700, 6.900, 7.100, 7.300, 7.500, 7.750, 8.000, 8.250,
    8.500, 8.750, 9.000, 9.250, 9.500, 9.750,
];

const R160 = [1.000, 1.015, 1.030, 1.045, 1.060, 1.075, 1.090, 1.105, 1.120, 1.135, 1.150, 1.165, 1.180, 1.190, 1.220, 1.230, 1.250, 1.265, 1.280, 1.300, 1.320, 1.340, 1.360, 1.380,
    1.400, 1.425, 1.450, 1.475, 1.500, 1.525, 1.550, 1.575, 1.600, 1.675, 1.700, 1.725, 1.750, 1.775, 1.800, 1.825, 1.850, 1.875, 1.900, 1.925, 2.000, 2.030, 2.060, 2.090,
    2.120, 2.150, 2.180, 2.210, 2.240, 2.270, 2.300, 2.330, 2.360, 2.395, 2.430, 2.465, 2.500, 2.540, 2.580, 2.615, 2.650, 2.685, 2.720, 2.760, 2.800, 2.850, 2.900, 2.950,
    3.000, 3.035, 3.070, 3.110, 3.150, 3.200, 3.250, 3.300, 3.350, 3.400, 3.450, 3.500, 3.550, 3.600, 3.650, 3.700, 3.750, 3.810, 3.870, 3.935, 4.000, 4.060, 4.120, 4.185,
    4.250, 4.315, 4.370, 4.440, 4.500, 4.560, 4.620, 4.685, 4.750, 4.815, 4.870, 4.930, 5.000, 5.075, 5.150, 5.225, 5.300, 5.375, 5.450, 5.525, 5.600, 5.700, 5.800, 5.900,
    6.000, 6.075, 6.150, 6.225, 6.300, 6.400, 6.500, 6.600, 6.700, 6.800, 6.900, 7.000, 7.100, 7.200, 7.300, 7.400, 7.500, 7.625, 7.750, 7.875, 8.000, 8.125, 8.250, 8.375,
    8.500, 8.625, 8.750, 8.875, 9.000, 9.125, 9.250, 9.375, 9.500, 9.625, 9.750, 9.875,
];


function splitValue(value) { // Splits a number into a decimal and a power of ten
    let exp = value.toExponential(),
        indexOfE = exp.indexOf("e"),
        firstPart = exp.slice(0, indexOfE),
        secondPart = exp.slice(indexOfE + 1);
    return [+firstPart, +secondPart];
}

function nextR(value, R_SERIE) { // Returns the next element of the series R_SERIE after the value 
    if (value == 0) return value + 1;
    if (value < 0) return -prevR(-value, R_SERIE);
    let splitted = splitValue(value);
    let i = R_SERIE.filter(item => item <= splitted[0]).length;
    if (i == R_SERIE.length) {
        return R_SERIE[0] * Math.pow(10, splitted[1] + 1)
    } else {
        return R_SERIE[i] * Math.pow(10, splitted[1])
    };
}

function prevR(value, R_SERIE) { // Returns the previous element of the series R_SERIE before the value
    if (value == 0) return value - 1;
    if (value < 0) return -nextR(-value, R_SERIE);
    let splitted = splitValue(value);
    let i = R_SERIE.filter(item => item < splitted[0]).length - 1;
    if (i < 0) {
        return R_SERIE[R_SERIE.length - 1] * Math.pow(10, splitted[1] - 1)
    } else {
        return R_SERIE[i] * Math.pow(10, splitted[1])
    };
}

function nearR(value, R_SERIE) { // Returns the nearest element of the series R_SERIE
    if (value == 0 || isNaN(+value)) return 0;
    value = +value;
    let prev = prevR(value, R_SERIE);
    let next = nextR(value, R_SERIE);
    if (nextR(prev, R_SERIE) === value || prevR(next, R_SERIE) === value) return value;
    let prevDif = Math.abs(prev - value);
    let nextDif = Math.abs(next - value);
    if (prevDif < nextDif) return prev; else return next;
}

export let nextR40 = value => nextR(value, R40);
export let prevR40 = value => prevR(value, R40);
export let nearR40 = value => nearR(value, R40);
export let nextR80 = value => nextR(value, R80);
export let prevR80 = value => prevR(value, R80);
export let nearR80 = value => nearR(value, R80);
export let nextR160 = value => nextR(value, R160);
export let prevR160 = value => prevR(value, R160);
export let nearR160 = value => nearR(value, R160);
