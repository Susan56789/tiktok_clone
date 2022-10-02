export default {
    name: 'postedBy',
    title: 'Posted By',
    type: 'reference',
    to: [{ type: 'user' }]  // This is the reference to the user schema (see user.js)

}