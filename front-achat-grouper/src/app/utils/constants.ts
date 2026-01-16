export const APP_CONSTANTS = {
  APP_NAME: 'GroupBuy',
  APP_VERSION: '1.0.0',
  API_BASE_URL: 'http://localhost:3000/api',
  DEFAULT_CURRENCY: 'FCFA',
  
  ROLES: {
    ADMIN: 'admin',
    SUPPLIER: 'supplier',
    MEMBER: 'member'
  } as const,
  
  ORDER_STATUS: {
    PENDING: 'pending',
    PAID: 'paid',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
  } as const,
  
  GROUP_STATUS: {
    ACTIVE: 'active',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
  } as const,
  
  NOTIFICATION_DURATION: {
    SUCCESS: 3000,
    ERROR: 5000,
    INFO: 3000,
    WARNING: 4000
  } as const,
  
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    PAGE_SIZE_OPTIONS: [10, 20, 50, 100]
  } as const,
  
  VALIDATION: {
    MIN_PASSWORD_LENGTH: 8,
    MAX_PASSWORD_LENGTH: 50,
    MIN_GROUP_MEMBERS: 2,
    MAX_GROUP_MEMBERS: 100
  } as const
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'currentUser',
  CART: 'cart',
  LANGUAGE: 'language',
  THEME: 'theme'
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  PRODUCTS: '/products',
  CATEGORIES: '/categories',
  GROUPS: '/groups',
  CART: '/cart',
  PROFILE: '/profile',
  DASHBOARD: {
    MEMBER: '/dashboard/member',
    SUPPLIER: '/dashboard/supplier',
    ADMIN: '/dashboard/admin'
  }
} as const;