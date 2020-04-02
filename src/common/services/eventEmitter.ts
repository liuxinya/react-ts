import { Injectable } from 'qzx-ioc';

@Injectable()
export class UEventEmitter {
  private events: {
    [prop: string]: {
      handler: fn,
      once: boolean
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
   * @param isMultiple 是否多次添加handler
   */
  on(eventname: string, handler: fn, isMultiple: boolean = true): UEventEmitter {
    let event = this.events[eventname]
    if (event && !isMultiple ) {
        return this
    }
    this.addEvent(eventname, handler, false);
    return this;
  }

  private addEvent(eventname: string, handler: fn, once: boolean = false) {
    if (typeof eventname === 'function') {
      once = handler as any;
      handler = eventname;
      eventname = 'default';
    }
    if (!this.events[eventname]) {
      this.events[eventname] = [];
    }
    this.events[eventname].push({
      handler,
      once
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
      this.events[eventname] = this.events[eventname].filter(item => {
        let isOnce = item.once;
        if (isOnce) {
          delete item.handler;
          delete item.once;
        }
        return !isOnce;
      })
    }
    return this;
  }
}

type fn = (e: any) => void
