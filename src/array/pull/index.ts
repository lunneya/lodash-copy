function _pull(array: any[], ...values: any): any {
    return array.filter(item => !values.includes(item));
}

export default _pull;