<template>
    <div class="registration-form">
        <h3>register here</h3>
        <form action="">
            <label for="username">username</label>
            <input type="text" id="username" class="input-box">
            <label for="email">email</label>
            <input type="email" name="email" id="email" class="input-box">
            <label for="phone">phone number</label>
            <input type="tel" name="phone" id="phone" class="input-box">
            <label for="pass">password</label>
            <input type="password" name="pass" id="pass" class="input-box">
            <label for="dat">Date</label>
            <input type="date" name="" id="" class="input-box">
            <label for="file">File</label>
            <input type="file" name="" id="" class="input-box">
            <label for="range">Range</label>
            <input type="range" name="" id="">
            <!-- <label for="checkbox">Checkbox</label>
            <input type="checkbox" name="" id="">
            <label for="radio">Radio</label>
            <input type="radio" name="" id="">
            <label for="color">Color</label>
            <input type="color" name="" id=""><br> --> <br>
            <input type="submit" value="submit" class="btn">
        </form>
    </div>
</template>
<script>
export default {
    name: 'Registration',
}
</script>