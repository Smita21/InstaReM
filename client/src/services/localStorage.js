
const setlocalstorage = () => {
    localStorage.setItem('fname', this.state.firstname)
    localStorage.setItem('mname', this.state.middlename)
    localStorage.setItem('lname', this.state.lastname)
    localStorage.setItem('contact', this.state.contact)
    localStorage.setItem('address', this.state.address)
}
