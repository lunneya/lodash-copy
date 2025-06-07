function _compact(array: any[]): any[] {
    return array.filter(item => !!item);
}

export default _compact;