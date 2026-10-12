// 全部为虚构演示数据
export const summary = { students: 1286, newLeads: 74, todayLessons: 58, monthIncome: 386500, attendance: 0.96, renewRate: 0.71 };

export const leads = [
  { id: 1, name: '张同学', phone: '138****0001', source: '地推', intent: '高', owner: '课程顾问A', status: '已约试听' },
  { id: 2, name: '李同学', phone: '139****0002', source: '转介绍', intent: '中', owner: '课程顾问B', status: '待跟进' },
  { id: 3, name: '王同学', phone: '137****0003', source: '线上表单', intent: '高', owner: '课程顾问A', status: '已报名' },
];

export const students = [
  { id: 1, name: '陈同学', campus: '示例一校区', course: '少儿英语 L2', remain: 32, status: '在读' },
  { id: 2, name: '刘同学', campus: '示例二校区', course: '数学思维 进阶', remain: 8, status: '待续费' },
  { id: 3, name: '赵同学', campus: '示例一校区', course: '美术启蒙', remain: 0, status: '已结课' },
];

export const lessons = [
  { id: 1, time: '09:00-10:30', className: '少儿英语 L2-1班', teacher: '老师A', room: '101 教室', signed: '12/13' },
  { id: 2, time: '14:00-15:30', className: '数学思维 进阶班', teacher: '老师B', room: '203 教室', signed: '9/10' },
  { id: 3, time: '18:30-20:00', className: '1对1 物理', teacher: '老师C', room: '305 教室', signed: '1/1' },
];

export const orders = [
  { id: 'D20261001001', student: '陈同学', item: '少儿英语 48课时', amount: 6800, pay: '微信支付', status: '已收款' },
  { id: 'D20261001002', student: '刘同学', item: '数学思维 续费 24课时', amount: 3600, pay: '线下', status: '已收款' },
  { id: 'D20261001003', student: '王同学', item: '美术启蒙 试听转正', amount: 2400, pay: '分期', status: '待收款' },
];

export const campuses = [
  { id: 1, name: '示例一校区', students: 702, teachers: 21, income: 213000 },
  { id: 2, name: '示例二校区', students: 584, teachers: 17, income: 173500 },
];
