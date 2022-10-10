

export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'Posted By',
            type: 'postedBy',
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'array', // This is an array of references to the user schema (see user.js)
            of: [{
                type: 'user'
            }
            ]
            // This is the reference to the user schema (see user.js)

        },

        {
            name: 'comment',
            title: 'Comment',
            type: 'array',  // This is an array of references to the comment schema (see comment.js)
            of: [{ type: 'comment' }], // This is the reference to the comment schema (see comment.js)
        },
        {
            name: 'topic',
            title: 'Topic',
            type: 'string',
        },
    ],
};