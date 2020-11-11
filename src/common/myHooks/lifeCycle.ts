import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * 组件内只执行一次, 内部支持 async await
 * @param fn 要执行方法
 * @param destoryCallBack 组件销毁执行的回调
 */
export function useOnMount(fn: () => void, destoryCallBack?: () => void) {
    useEffect(() => {
        fn();
        if (destoryCallBack) {
            return () => {
                destoryCallBack();
            };
        }
    }, []);
}

/**
 *  第一次不执行，组件更新执行
 * @param fn 要执行方法
 * @param dep 所执行的方法依赖哪些状态的变化
 */
export function useOnUpdate(fn: () => void, dep?: any[]) {
    const ref = useRef({ fn, mounted: false });
    ref.current.fn = fn;

    useEffect(() => {
        // 首次渲染不执行
        if (!ref.current.mounted) {
            ref.current.mounted = true;
        } else {
            ref.current.fn();
        }
    }, dep);
}

// 强制更新组件，不提倡，除非万不得已
export function useForceUpdate() {
    const [, setValue] = useState(0);
    return useCallback(() => {
        // 递增state值，强制React进行重新渲染
        setValue(val => (val + 1) % (Number.MAX_SAFE_INTEGER - 1));
    }, []);
}