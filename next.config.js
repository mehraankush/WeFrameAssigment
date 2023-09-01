/** @type {import('next').NextConfig} */
const nextConfig = {
    theme:{
        colors:{
            "woodland":"#464366",
            "faded-blue":"#7879F1",
            "kanban":"#6418C3",
            "24":"24px",
            "other-menu":"#6418C3",
        },
        fontSize: {
            sm: '1.5rem',
          }
    },
    screens:{
     '1050':{'max':'1050px'}
    },
    webpack(config){
        config.module.rules.push({
            test:/\.svg$/,
            use:'@svgr/webpack'
        })
        return config
    }
}

module.exports = nextConfig
