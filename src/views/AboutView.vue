<script setup>
</script>

<template>
  <div
    style="background: url('https://unsplash.com/photos/E--AUpYXbjM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc5NzMyOTky&force=true&w=960'); background-size: cover; background-position: center;"
    class="h-screen w-screen overflow-y-scroll text-blue-50">

    <!-- Content -->
    <div class="h-full w-full bg-pink-900 bg-opacity-25">

      <!-- Title -->
      <div class=" sticky top-0 z-20 mb-7 shadow-xl bg-black bg-opacity-50">
        <h2 class="text-3xl sm:text-4xl md:text-6xl py-7 text-center font-semibold backdrop-blur-md">About page</h2>
      </div>

      <div class="text-center text-lg md:text-xl font-semibold backdrop-blur-md bg-red-600 bg-opacity-60 rounded-lg px-2 py-4 my-4 mx-auto w-10/12 md:w-8/12 hi">This is abbandoned. I don't develop this now 🥱</div>
      
      <!-- ⚠️ -->
      <div class="text-center text-base md:text-lg px-4 py-9 bg-black bg-opacity-50 backdrop-blur-md uppercase ">
        <h2>This is not a commercial product!</h2>
        <h2>⚠️⚠️⚠️</h2>
        <h2>I don't own copyright permissions of any
          <span class="text-red-600 font-semibold uppercase"> song</span> or
          <span class="text-red-600 font-semibold uppercase"> image</span> you see in this application.
        </h2>
        <h2>This is just a project i done for practise.</h2>
        <h2>If you have any problem with content on here, feel free to <a href="mailto:nalindard@gmail.com"
            class="font-semibold underline text-sky-400"> let me know!</a></h2>
      </div>

      <!-- Things -->
      <div class="backdrop-blur-md bg-black bg-opacity-50 mt-7 px-4 py-4 pb-7 text-sm md:text-base ">

        <!-- Me -->
          <details class="">
            <summary class="py-2" >?</summary>
              <ol type="1" class="list-decimal pl-12">
                <li>I Don't know UI/UX Design.</li>
                <li>Three times changed the UI of this, but not satisfied.</li>
                <li>This is developed using vue.</li>
                <li>Initialy planned to do withot backend but couldn't because of 'polyfile' problem.</li>
                <li>This has tiny separate express server.</li>
                <li>This application don't use any public or private API.</li>
                <li>In backend, it directly load NCS website & scrap its data to frontend.</li>
                <li>So loading will be noticeably slow 😫.</li>
              </ol>
          </details>

        <hr class="my-4">


        <!-- Features -->
        <details>
          <summary class="py-2">Features ?</summary>
          <div>
            <ol type="01" class="list-decimal pl-12">
              <li>
                <ol type="1" class="list-decimal">Search for songs by:
                  <li class="ml-12">name</li>
                  <li class="ml-12">genre</li>
                  <li class="ml-12">mood</li>
                </ol>
              </li>
              <li>Download songs.</li>
              <li>Play songs.</li>
              <li>Add songs to current list.</li>
              <li>Seek tracks.</li>
              <li>Repeat.</li>
              <li>Suffel.</li>
              <li>Volume cotrole.</li>
              <li>Suffel.</li>
              <li>...</li>
            </ol>
          </div>
        </details>
        <hr class="my-4">


        <!-- Bugs -->
        <details>
          <summary class="py-2">Bugs ?</summary>
          <div>
            <ol type="1" class="list-decimal pl-12">
              <li>Seeking is buggy on poor connections.</li>
              <li>Seeking may cause visual troubles if try on paused track.</li>
              <li>Can't configure the Visualizer{server not supported(not my one.)}</li>
              <li>...</li>
            </ol>
          </div>
        </details>
        <hr class="my-4">


        <!-- To add -->
        <details>
          <summary class="py-2">To add ?</summary>
          <div>
            <ol type="1" class="list-decimal pl-12">
              <li>User login.</li>
              <li>Simulatly sync the playing songs time accross all the logged in devises, so more devises, more sound
                🤷‍♂️(This is awful because the connection speed).</li>
              <li>History & Plalists.</li>
              <li>Like songs.</li>
              <li>...</li>
            </ol>
          </div>
        </details>



      </div>

      <!-- Image credit -->
      <span class="fixed bottom-2 md:bottom-4 right-2 md:right-4 text-xs scale-75 md:scale-90 lg:scale-100">
        Photo by <a
          href="https://unsplash.com/@alicemoore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Elice
          Moore</a> on <a
          href="https://unsplash.com/photos/E--AUpYXbjM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </span>

    </div>
  </div>
</template>

<style lang="css"></style>