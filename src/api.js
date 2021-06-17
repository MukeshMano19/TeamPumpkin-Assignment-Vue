let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://213.208.188.96:5000/api/v1'
} else {
    baseUrl = 'http://localhost:5000/api/v1'
}

export const apiHost = baseUrl