import { DemoMode } from './Demo';
import { Demo2Mode } from './Demo2';
// 一个方法里有多个await调用 以该方式导出的mode会引起编译异常 

export const demoMode = new DemoMode();
export const demo2Mode = new Demo2Mode();