const Form = () => {
    const formState = {};

    function register(name, validator = (value)=>true) {

    }

    function validate() {
        return false;
    }

    function getFormData() {
        return { name: "Kim"};
    }

    function setValue(name, value) {

    }

    return {
        register,
        validate,
        getFormData,
        setValue,
    };
};

export default Form;