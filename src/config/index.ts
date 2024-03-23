const getEnvVar = (key: string): string => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }

  return import.meta.env[key] ?? ''
}

export const API_URL = getEnvVar('VITE_API_URL')

export const MODE = process.env.NODE_ENV // development | production
