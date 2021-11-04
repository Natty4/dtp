
<template>
    <div class="form-card">
    <form action="post">
        <div class="input-field">
            <input type="text" name="username" id="username">
            <label for="username">username</label>

        </div>
        <div class="input-field">
            <input type="email" name="email" id="email">
            <label for="email">email</label>

        </div>
        <div class="input-field">
            <input type="password" name="password" id="password">
            <label for="password">password</label>

        </div>
        <div class="input-field">
            <input type="submit" name="register" id="register" value="Submit">
        </div>
    </form>
</div>
</template>

<script>
export default {
   name : "Form",
}
</script>

<style>
   .form-card{
        background: white;
        margin-top: 25rem;
        box-shadow: 0 1.6rem 1.6rem lightgrey;
        padding: 4rem;
    }
    .input-field{
        display: block;
        
    }
    .input-field input{
        margin-top: 2rem;
        border-style: none;
        border-bottom: 1px solid cornflowerblue;
        height: 2rem;
        font-weight: bolder;
    }
    .input-field label{
        display: block;
        position: relative;
        left: .6rem;
        bottom: 1.6rem;
        background: inherit;
        transition: .2s ease all;
        max-width: 5rem;
        
    }

    .input-field input:focus ~ label{
        position: relative;
        left: .6rem;
        bottom: 3rem;
        background: white;
        
        
    }
</style>