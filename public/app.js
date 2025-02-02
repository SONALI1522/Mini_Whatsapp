document.addEventListener("DOMContentLoaded", function () {
    console.log("app.js is connected!"); 

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); 

            const form = this.closest("form");
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to undo this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "Cancel"
            }).then((result) => {
                // console.log("Popup result:", result); // Check if the result is correct
                if (result.isConfirmed) {
                    form.submit(); // Submit the form if confirmed
                }
            });
        });
    });
});
