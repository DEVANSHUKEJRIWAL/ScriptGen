export default [
    {
        name: 'Blog Title',
        desc: "An AI tool that generates blog information",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'Generate 5 blog title ideas in bullet points based on the given niche and outline, and provide the result in a rich text editor format.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            }, {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: "An AI tool that generates blog content",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'Generate a blog content based on the given niche and outline, and provide the result in a rich text editor format.',
        slug: 'blog-content-generation',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'topic',
                required: true
            }, {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: "An AI tool that generates blog post topic ideas",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/427/427735.png',
        aiPrompt: 'Generate 5 blog topic ideas in bullet points based on the given niche and outline, and provide the result in a rich text editor format.',
        slug: 'blog-topic-idea',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            }, {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: "An AI tool that generates SEO titles for YouTube videos",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3494/3494244.png',
        aiPrompt: 'Generate 5 SEO title ideas in bullet points based on the given keywords and outline for YouTube videos, and provide the result in a rich text editor format.',
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Enter your YouTube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            }, {
                label: 'Enter video outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: "An AI tool that generates YouTube video descriptions",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate a YouTube video description based on the given topic and outline, and provide the result in a rich text editor format.',
        slug: 'youtube-description',
        form: [
            { 
                label: 'Enter your video topic',
                field: 'input',
                name: 'topic',
                required: true
            }, {
                label: 'Enter video outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: "An AI tool that generates YouTube tags",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884882.png',
        aiPrompt: 'Generate YouTube  hashtags based on the given niche and outline, and provide the result in a rich text editor format.',
        slug: 'youtube-tag',
        form: [
            {
                label: 'Enter your video niche',
                field: 'input',
                name: 'niche',
                required: true
            }, {
                label: 'Enter video outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Rewrite Article(Plagiarism Free)',
        desc: "An AI tool that rewrites articles to be plagiarism-free",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/15870/15870975.png',
        aiPrompt: 'Rewrite the article to be plagiarism-free based on the given niche and outline, and provide the result in a rich text editor format.',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            }, {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: "An AI tool that improves text quality",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/16201/16201711.png',
        aiPrompt: 'Improve the text quality based on the given niche and outline, and provide the result in a rich text editor format.',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            }, {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Add Emojis to text',
        desc: "An AI tool that adds emojis to text",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/742/742751.png',
        aiPrompt: 'Add appropriate emojis to the text based on the given niche.',
        slug: 'add-emoji-to-text',
        form: [
            {
                label: 'Enter your text',
                field: 'input',
                name: 'text',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: "An AI tool that generates Instagram post content",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: 'Generate 5 Instagram post ideas in bullet points based on the given niche and outline, and provide the result in a rich text editor format.',
        slug: 'generate-instagram-post',
        form: [
            {
                label: 'Enter your post niche',
                field: 'input',
                name: 'niche',
                required: true
            }, {
                label: 'Enter post outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    }         
]
