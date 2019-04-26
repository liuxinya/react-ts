/**
 * 
 * @param arr 移除指定条件的数组
 * @param index 
 */
export function removeFromArrayByCondition<T>(arr: T[], condition: (item: T, index: number) => Boolean, setValue: (arr: T[], index: number, val: T) => void = (arr: T[], index: number, val: T) => {
    arr[index] = val;
}) {
    // 设置默认的condition
    condition = (!condition || typeof condition !== 'function') ?  (
        item: T,
        index: number
    ) => {
        // 默认什么都不做
        return false;
    } : condition;
    let count = 0;
    // 移除指定条件的数组，这里应当需要遍历所有
    for(let i = 0; i < arr.length; i++) {
        if(condition(arr[i], i)) {
            // 需要移除，计个数
            count++;
        } else {
            // 不需要移除，那么需要前移
            if(count > 0) {
                setValue(arr, i - count, arr[i]);
            }
        }
    }
    for(let i = 0; i < count; i++) {
        arr.pop();
    }
    return arr;
}
export function removeFromArrayByConditionReverse<T>(arr: T[], condition: (item: T, index: number) => Boolean, setValue: (arr: T[], index: number, val: T) => void = (arr: T[], index: number, val: T) => {
    arr[index] = val;
}) {
    // 设置默认的condition
    condition = (!condition || typeof condition !== 'function') ?  (
        item: T,
        index: number
    ) => {
        // 默认什么都不做
        return false;
    } : condition;
    let count = 0;
    // 移除指定条件的数组，这里应当需要遍历所有
    for(let i = arr.length - 1; i >= 0; i--) {
        if(condition(arr[i], i)) {
            // 需要移除，计个数
            count++;
        } else {
            // 不需要移除，那么需要后移
            if(count > 0) {
                setValue(arr, i + count, arr[i]);
            }
        }
    }
    for(let i = 0; i < count; i++) {
        arr.shift();
    }
    return arr;
}


/**
 * 
 * @param arr 移除指定数值的数组
 * @param value 
 */
export function removeFromArrayByValue<T>(arr: T[], value: T) {
    return removeFromArrayByCondition(arr, (
        val: T,
        index: number
    ) => {
        return val === value;
    });
}
/**
 * 
 * @param arr 移除指定数值组的数组
 * @param value 
 */
export function removeFromArrayByValues<T>(arr: T[], values: T[] = []) {
    let map = new Map<T, T>();
    values = Array.isArray(values) ? values : [];
    values.forEach((value: T, index: number) => {
        map.set(value, value);
    })
    return removeFromArrayByCondition(arr, (
        val: T,
        index: number
    ) => {
        return map.has(val);
    });
}

/**
 * 
 * @param arr 从数组中移除单个的值
 * @param index 
 */
export function removeFromArrayByIndex<T>(arr: T[], index: number, setValue: (arr: T[], index: number, value: T) => void =  (arr: T[], index: number, value: T) => {
    arr[index] = value;
}) {
    return removeFromArrayByIndexes(arr, [index], setValue);
}
/**
 * func: 指定一系列的下标去移除
 * 由于给定的下标不一定是按照顺序的，所以在删除的时候可能会出现问题
 */
export function removeFromArrayByIndexes<T>(arr: T[], indexes: number[], setValue: (arr: T[], index: number, value: T) => void = (arr: T[], index: number, value: T) => {
    arr[index] = value;
}) {
    let map = new Map<number, number>();
    let len = arr.length;
    let removeLen = 0;
    indexes.forEach((v: number, index: number) => {
        if (v < len) {
            map.set(v, v);
            removeLen = removeLen + 1;
        }
    });
    let count = 0;
    // 判断是否应该被移除
    for (let i = 0; i < len; i++) {
        // 先判断是不是到头了，要是到头了就停止循环
        if (map.has(i)) {
            // 如果是个要删除的 那么就开始计数
            count++;
        } else {
            // 如果不是。向前移除count个
            setValue(arr, i - count, arr[i]);
            if (i - count + removeLen >= len - 1) {
                break;
            }
        }
    }
    // 开始一个个的pop
    for (let i = 0; i < removeLen; i++) {
        arr.pop();
    }
    return arr;
}