new Vue({
    el: '#editor',
    data: {
        input: '#hello! Write your markdown here :)'
    },
    filters: {
        marked: marked
    }
})

