export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore doloribus officia pariatur quod cumque sit, ducimus unde sunt quidem et iusto esse ratione laborum facilis perferendis, quos repellendus totam?',
            picture: null,      
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia saepe dolore, ullam unde inventore ipsam eveniet qui similique officiis, nulla alias repellendus molestias? Officiis, voluptates quia nobis esse excepturi nisi.',
            picture: null,      
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, qui aspernatur voluptatibus ducimus ipsum ipsa? Quia assumenda ex voluptatibus, est dolorem cumque in animi sint sed? Inventore ipsa sequi totam.',
            picture: null,      
        }
    ]
})