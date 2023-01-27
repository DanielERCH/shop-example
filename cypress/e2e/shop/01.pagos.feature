Feature: Regresión de todas las pruebas

    Scenario: CP001 - Dar de alta un usuario
        Given Ingresar a la página de la tienda
        Then Dar click en "Sign up"
        Then Limpiar los campos de registro
        Then Completar los campos de registro
        Then Dar click para completar el registro
        When Validar que se halla registrado el usuario

    Scenario: CP002 - Login con el usuario dado de alta 
        Given Ingresar a la página de la tienda
        Then Dar click en "Log in"
        Then Limpiar los campos de login
        Then Completar los campos de login
        Then Dar click en login para completar
        Then Esperar 2 segundos
        When Validar que el usuario se encuentre en la cuenta personal

    Scenario: CP003 - Comprobar que se agrega un producto al carrito
        Then Esperar 3 segundos
        Then Seleccionar la categoría "laptop"
        Then Esperar 1 segundos
        Then Seleccionar un producto
        Then Esperar 2 segundos
        # Then Agregar un producto al carrito
        # When Validar que se halla agregado el producto

    # Scenario: CP004 - Logout con el usuario dado de alta 
    #     Then Esperar 4 segundos
        # Then Dar click en "Log out"
        # When Validar que se halla cerrado la cuenta

    

    


    
        
   