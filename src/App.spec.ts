import { describe, it, expect } from "vitest"
import { shallowMount, mount } from "@vue/test-utils"
import { createRouter, createMemoryHistory } from 'vue-router'
import App from "@/App.vue"

const routes = [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/recipes', component: { template: '<div>Recipes</div>' } }
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

describe("App.vue", () => {
    it("Renders navbar", async () => {
        const wrapper = shallowMount(App, {
            global: {
              plugins: [router]
            }
        });

        await router.isReady()

        const navBar = wrapper.findComponent({name: 'NavBar'})
        expect(navBar.exists()).toBe(true)
    })})