import ReactGA from 'react-ga4'

const GOOGLE_GA_TOKEN = 'G-Q1N7BH4CDQ'
ReactGA.initialize(GOOGLE_GA_TOKEN)

export const sendPageView = (path) =>{
    ReactGA.send({
        hitType:'pageview',
        page:path,
        title:'custom title'
    })
}