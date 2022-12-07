<template> 
  <div class="border border-danger p-5 mt-5 mb-5 rounded" id="ship" style="width: fit-content; margin:auto">
    <form @submit.prevent="inputShipping">
            <h3 class="text-center mb-5">Shipping Form</h3>
            <div  class="form-row">
                <div class="form-group col-md-6">
                    <label for="first">First Name</label>
                    <input v-model="shippingData.first_name" type="text" class="form-control mb-2" id="first" placeholder="Enter your first name" required>
                    <label for="last">Last Name</label>
                    <input v-model="shippingData.last_name" type="text" class="form-control mb-2" id="last" placeholder="Enter your last name" required>
                    <label for="email">Email Adress</label>
                    <input v-model="shippingData.email" type="email" class="form-control mb-2" id="email" placeholder="Enter your email" required>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="phone">Phone Number</label>
                    <input v-model="shippingData.phone_number" type="text" class="form-control mb-2" id="phone" placeholder="Enter your phone number" required>
                    <label for="cits">City</label>
                    <input v-model="shippingData.city" type="text" class="form-control mb-2" id="cits" placeholder="Enter your city" required>
                    <label for="postal">Postal Code</label>
                    <input v-model="shippingData.postal_code" type="text" class="form-control mb-2" id="postal" placeholder="Enter postal code" required>
                  </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="adress">Adress</label>
                <textarea v-model="shippingData.address" style="overflow: auto;" cols="50" rows="4" id="adress" placeholder="Enter your adress" required></textarea>
              </div>

            </div>
            <button type="submit" class="btn btn-danger">{{ buttonValue }}</button> 
        </form>
                   <!-- Success Section -->
                   <SuccessForm v-show="success"></SuccessForm>
    </div>
</template>

<script>
import shippingService from '@/services/shippingService';
import SuccessForm from "./SuccessForm.vue"

export default {
    name: 'ShipComponents',

  data(){
    return{
      shippingData:{
          "first_name": null,
          "last_name": null,
          "email": null,
          "phone_number": null,
          "city": null,
          "postal_code": null,
          "address": null
      },
    success : false,
    buttonValue : "Submit"
  }
},
methods : {
  inputShipping(){
    let data = this.shippingData;

    if(this.buttonValue === "Submit"){
      shippingService.create(data)
      .then(response => {
        console.log(response.data);
      })
      location.reload();
  }else{
      shippingService.updateShipping(data.id, data)
      .then(response => {
        console.log(response.data);
          this.success = true;
        })
    .catch(e => {
      console.log(e);
    });
    location.reload();
  }
  // cekInput(){
  //   console.log(this.shippingData);
  // }
},
},
components : {
            SuccessForm
        },
        props: ["shippingDataProps"],
        watch: {
            'shippingDataProps'(newValue) {
                this.shippingData = newValue;
                console.log(this.shippingData);
                this.buttonValue = "Update"
            }
        }
    }
    
</script>

<style>

</style>