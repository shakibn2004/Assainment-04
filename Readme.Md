
Answer-01:

getEelementById("id")

            * it is use to select a element with a specific "id"
            * it can select only one element


getElementsByClassName("class")

            * it is use to select all elements with a specific "class name"
            * it return all element as a html collection
            * it return all elements only!


querySelector("selector") 

            * it is use to select a element with a specific "id" or "class name"
            * if the class name remains multiple times than it select the first match


querySelectorAll("selector")

            * it select all elements with a specific "class name"
            * it retunn all elements as a nodeList
            * it return all elements, elemnets, text node, comments and others


------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------


Answer-02:

        For Creating New div
            * use document.createElement() and store it to a variable
            * then set the new elemnet innerHTML content by using, variable.innerHTML = 'something'
            * then append it into the parent element by using, parent.apeend()



------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------


Answer-03: 

        * Enent bubling means When a event happend on element(target) then it propagetes up to ancestors in the DOM tree
        * When browser loaded then it converted all the html page in a DOM tree and when event happend on any element of the tree then it propagates up


------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------


Answer-04:

        * Event Delegation uses a single parent element to handle events for its child elements.
        * it is most usefull for dynamics works. if any element are added to the main element later the page loaded it also can select a specifc section or element.


------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------


Answer-05: 

        preventDefault()

                * It prevent the default caracteristics of the bowser, for example when click on a link then it does not work.
                * diff: it stop the default browser activities

        stopPropagation()

                * it stop propagation or bubling depending on a specific conditon        
                * diff: it stop the event handler functionalities 





            