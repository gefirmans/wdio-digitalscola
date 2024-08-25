describe('Test saucedemo', () => {
    it('Tes 1 - Login successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        //login page elements
        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$("#login-button")

        //login page actions
        await usernameTextbox.addValue("standard_user")
        await browser.pause(1000)
        await passwordTextbox.addValue("secret_sauce")
        await browser.pause(1000)
        await loginButton.click()
        await browser.pause(1000)
        //assert.equal(await browser.getUrl(),'https://www.saucedemo.com/inventory,html');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')
    });

    it('Tes 2 - Add to cart successfully', async () => {
        await browser.url("https://www.saucedemo.com/inventory.html")
        //add to cart page elements
        const addToCartButton = await browser.$("#add-to-cart-sauce-labs-backpack")
        const cartButton = await browser.$("#shopping_cart_container")
        const removeButton = await browser.$("#remove-sauce-labs-backpack")

        //add to cart page actions
        await addToCartButton.click()
        await browser.pause(1000)
        await removeButton.click()
        await browser.pause(1000)
        await addToCartButton.click()
        await browser.pause(1000)
        await cartButton.click()
        await browser.pause(2000)
        //assert.equal(await browser.getUrl(),'https://www.saucedemo.com/cart');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(browser).toHaveTitle('Swag Labs')
    });

    it ('Tes 3 - Checkout successfully', async () => {
    await browser.url("https://www.saucedemo.com/cart.html")
    const checkoutButton = await browser.$("#checkout")
    //checkout page elements
    await checkoutButton.click()
    await browser.pause(1000)
    await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
    });

    it('Tes 4 - Checkout step one successfully', async () => {
        await browser.url("https://www.saucedemo.com/checkout-step-one.html")
        //checkout step one page elements
        const firstNameTextbox = await browser.$("#first-name")
        const lastNameTextbox = await browser.$("#last-name")
        const address1Textbox = await browser.$("#postal-code")
        const continueButton = await browser.$("#continue")

        //checkout step one page actions
        await firstNameTextbox.addValue("Garuda")
        await browser.pause(1000)
        await lastNameTextbox.addValue("Firmansyah")
        await browser.pause(1000)
        await address1Textbox.addValue("12345")
        await browser.pause(1000)
        await continueButton.click()
        await browser.pause(1000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
    });

    it ('Tes 5 - Checkout step two successfully', async () => {
        await browser.url("https://www.saucedemo.com/checkout-step-two.html")
        //checkout step two page elements
        const finishButton = await browser.$("#finish")

        //checkout step two page actions
        await finishButton.click()
        await browser.pause(1000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    });

    it ('Tes 6 - Checkout step three successfully', async () => {
        await browser.url("https://www.saucedemo.com/checkout-complete.html")
        //checkout step three page elements
        const backtohomeButton = await browser.$("#back-to-products")
        await backtohomeButton.click()
        await browser.pause(1000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await browser.pause(2000)
    });
});