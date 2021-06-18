let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://localhost:4000/api'
} else {
    baseUrl = 'http://localhost:4000/api'
}

export const apiHost = baseUrl