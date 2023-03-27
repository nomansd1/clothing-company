import React from 'react'

function CompanyProfileTab() {
  return (
    <div>
      <div class="bg-white text-black shadow-md p-6">
  <div class="flex items-center mb-6">
    <img src="company-logo.png" alt="Company Logo" class="w-12 mr-2" />
    <h1 class="text-xl font-bold">Company Name</h1>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <p class="font-medium">Owner:</p>
      <p>John Doe</p>
    </div>
    <div>
      <p class="font-medium">Telephone:</p>
      <p>+1 123-456-7890</p>
    </div>
    <div>
      <p class="font-medium">Fax:</p>
      <p>+1 123-456-7890</p>
    </div>
    <div>
      <p class="font-medium">Email:</p>
      <p>john.doe@example.com</p>
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