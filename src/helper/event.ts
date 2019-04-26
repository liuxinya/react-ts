import { Injectable } from "qzx-ioc";

@Injectable()
export class UEventEmitter {
    private events: {
        [prop: string]: {
            handler: Function,
            once: boolean
        }[];
    } = {};
    once(eventname: string, handler: Function) {
       this.addEvent(eventname, handler, true);
       return this;
    }
    on(eventname: string, handler: Function) {
        this.addEvent(eventname, handler, false);
        return this;
    }
    private addEvent(eventname: string, handler: Function, once: boolean = false) {
        if(typeof eventname === 'function') {
            once = handler as any;
            handler = eventname;
            eventname = 'default';
        }
        if(!this.events[eventname]) {
            this.events[eventname] = [];
        }
        this.events[eventname].push({
            handler,
            once
        });
    }
    destroy() {
        for(let i in this.events) {
            let events = this.events[i];
            events.forEach((event) => {
                delete event.handler;
                delete event.once;
            });
            delete this.events[i];
        }
    }
    emit(eventname: string = 'default', ...data: any) {
        if(this.events[eventname]) {
            // 存在这个处理
            for(let i in this.events[eventname]) {
                let item = this.events[eventname][i];
                item.handler.apply(null, data);
            }
            this.events[eventname] = this.events[eventname].filter((item, index) => {
                let isOnce = item.once;
                if(isOnce) {
                    delete item.handler;
                    delete item.once;
                }
                return !isOnce;
            })
        }
        return this;
    }
}