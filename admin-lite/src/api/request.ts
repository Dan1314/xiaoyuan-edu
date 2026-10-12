// 统一请求封装（示例）。接口地址为占位，接入时替换为你自己的服务端。
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://api.example.com';

export async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('access_token') ?? '';
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', Authorization: token ? `Bearer ${token}` : '', ...init.headers },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = (await res.json()) as { code: number; data: T; msg?: string };
  if (body.code !== 0) throw new Error(body.msg ?? '请求失败');
  return body.data;
}

// 业务接口路径示例（与精简版页面对应）
export const ApiPaths = {
  dashboard: '/edu/dashboard/summary',
  students: '/edu/student/page',
  classes: '/edu/class/page',
  schedule: '/edu/schedule/list',
  orders: '/finance/order/page',
  leads: '/crm/lead/page',
  campuses: '/org/campus/list',
} as const;
