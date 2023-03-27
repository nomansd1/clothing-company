import React from 'react'
import { logo } from '../../assets/images'

function CompanyProfileTab() {
  return (
    <div>
      <div class="bg-white text-black shadow-md p-6">
  <div class="flex items-center mb-6">
    <img src={logo} alt="Company Logo" class="w-36 mr-2" />
    {/* <h1 class="text-xl font-bold">Company Name</h1> */}
  </div>
  <div class="flex flex-wrap md:grid md:grid-cols-2 gap-4">
    <div>
      <p class="font-medium">Owner:</p>
      <p>Ingo Bisenius</p>
    </div>
    <div>
      <p class="font-medium">Telephone:</p>
      <p>+49 177-0000000</p>
    </div>
    <div>
      <p class="font-medium">Fax:</p>
      <p>+49 177-1111111</p>
    </div>
    <div>
      <p class="font-medium">Email:</p>
      <p>Example@web.de</p>
    </div>
    <div class="col-span-2">
      <p class="font-medium">Username:</p>
      <p>john.doe</p>
    </div>
    <div class="col-span-2">
      <p class="font-medium">Password:</p>
      <p>********</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default CompanyProfileTab