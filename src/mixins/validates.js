export default {
   methods: {
      onlyNumber(evt, value, limit) {
         if (value && value.length > limit - 1) {
            evt.preventDefault();
            return;
         }
         evt = evt ? evt : window.event;
         const charCode = evt.which ? evt.which : evt.keyCode;
         if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            evt.preventDefault();
         } else {
            return true;
         }
      },
   },
};
