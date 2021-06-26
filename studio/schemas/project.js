export default{
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        {
        name:"title",
        type:"string"
        },
        {
            name:"date",
            type:"datetime"
        },
        {
            name:"palce",
            type:"string"
        },
        {
            name:"description",
            type:"text"
        },
        {
            name:"projectType",
            type:"string",
            title:"Project Type",
            options:{
                list:[
                    {value:"personal",title:"Personal" },
                    {value:"client",title:"client" },
                    {value:"school",title:"school" },
                ],
            },
        },
        {
            name:"link",
            type:"url"

        },
        {
            name:"tags",
            type:"array",
            of:[
                {type:"string"
            },
            ],
            options:{
                layout:"tags"
            },
        },

    ],
};