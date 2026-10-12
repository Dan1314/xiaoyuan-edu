import { request } from './request.js';
import { USE_MOCK } from '../config/index.js';

const mock = {
  lessons: [
    { id: 1, time: '09:00-10:30', className: '少儿英语 L2-1班', room: '101', signed: '12/13' },
    { id: 2, time: '14:00-15:30', className: '数学思维 进阶班', room: '203', signed: '9/10' },
  ],
  students: [
    { id: 1, name: '陈同学', course: '少儿英语 L2', remain: 32 },
    { id: 2, name: '刘同学', course: '数学思维 进阶', remain: 8 },
  ],
  homework: [{ id: 1, title: '英语 Unit3 朗读打卡', due: '今天 20:00', comment: '发音清晰，继续保持！' }],
};

const wrap = (key, path) => () => (USE_MOCK ? Promise.resolve(mock[key]) : request(path));
export const getTodayLessons = wrap('lessons', '/edu/schedule/today');
export const getStudents = wrap('students', '/edu/student/page');
export const getHomework = wrap('homework', '/home/homework/list');
