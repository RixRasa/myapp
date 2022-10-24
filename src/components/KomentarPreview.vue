<template>
    <div class="w-100 py-2 border">
        <div class="second py-2 px-2"> <span class="text1">{{mojKomentar.ime}}</span>
            <div class="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/tPvlEdq.jpg" width="18"><span class="text2">{{mojKomentar.opis}}</span></div>
                <div><span class="text3">Upvote</span><span class="thumbup"><i class="bi bi-hand-thumbs-up"></i></span><span class="text4">3</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"KomentarPreview",
     props: [
        'mojKomentar'
    ]
}
</script>
