/**
 * 事件存取触发器，提供一种 事件交互 的机制
 * 这里可以用 on 去监听一个事件
 * 用emit去触发执行事件
 * 适用于全局性质的事件交互，减少 props 的深度传递
 */

import { Injectable } from '@baidu/ioc';

@Injectable()
export class UEventEmitter {
    private events: {
        [prop: string]: {
            handler: fn;
            once: boolean;
        }[];
    } = {};

    /**
     * 只执行一次
     * @param eventname
     * @param handler
     */
    once(eventname: string, handler: fn): UEventEmitter {
        this.addEvent(eventname, handler, true);
        return this;
    }

    /**
     * 添加监听
     * @param eventname
     * @param handler
     * @param isMultiple 是否多次添加相同name的handler
     */
    on(
        eventname: string,
        handler: fn,
        isMultiple: boolean = true
    ): UEventEmitter {
        let event = this.events[eventname];
        if (event && !isMultiple) {
            return this;
        }
        this.addEvent(eventname, handler, false);
        return this;
    }

    private addEvent(eventname: string, handler: fn, once: boolean = false) {
        if (typeof eventname === 'function') {
            // eslint-disable-next-line no-param-reassign
            once = handler as any;
            // eslint-disable-next-line no-param-reassign
            handler = eventname;
            // eslint-disable-next-line no-param-reassign
            eventname = 'default';
        }
        if (!this.events[eventname]) {
            this.events[eventname] = [];
        }
        this.events[eventname].push({
            handler,
            once,
        });
    }

    /**
     * 销毁
     */
    destroy() {
        for (let i in this.events) {
            let events = this.events[i];
            events.forEach((event) => {
                delete event.handler;
                delete event.once;
            });
            delete this.events[i];
        }
    }

    // 删除
    delete(eventname: string) {
        let handler = this.events[eventname];
        if (handler) {
            delete this.events[eventname];
        }
    }

    /**
     * 触发
     * @param eventname
     * @param data
     */
    emit(eventname: string = 'default', ...data: any): UEventEmitter {
        if (this.events[eventname]) {
            // 存在这个处理
            for (let i in this.events[eventname]) {
                let item = this.events[eventname][i];
                item.handler.apply(null, data);
            }
            this.events[eventname] = this.events[eventname].filter((item) => {
                let isOnce = item.once;
                if (isOnce) {
                    delete item.handler;
                    delete item.once;
                }
                return !isOnce;
            });
        }
        return this;
    }
}

type fn = (e: any) => void;
