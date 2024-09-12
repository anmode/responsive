
    describe('Media Queries', function() {
      var header, headerH1, headerH5, headerText, body, container;

      beforeEach(function() {
        header = document.querySelector('header');
        headerH1 = document.querySelector('header h1');
        headerH5 = document.querySelector('header h5');
        
      });

      it('should apply media query styles(height for header) for max-width: 600px', function() {
        window.resizeTo(600, 800); // Resize window to trigger media query

        expect(window.getComputedStyle(header).height).toBe('200px');
   
 

      });
      it('should apply media query styles( font size for header) for max-width: 600px', function() {
        window.resizeTo(600, 800); // Resize window to trigger media query

    
        expect(window.getComputedStyle(header).fontSize).toBe('15px');
      });     
      it('should apply media query styles( text align for header) for max-width: 600px', function() {
        window.resizeTo(600, 800); // Resize window to trigger media query

    
        expect(window.getComputedStyle(header).textAlign).toBe('start');
      });   
      function vhToPx(vh) {
        return (window.innerHeight / 100) * vh + 'px';
      }
    
      it('should apply the correct font size for header h1', function() {
        window.resizeTo(600, 800); // Resize window to trigger media query
    
        expect(window.getComputedStyle(headerH1).fontSize).toBe(vhToPx(4));
      });
    
      it('should apply the correct font size and margin-top for header h5', function() {
        expect(window.getComputedStyle(headerH5).fontSize).toBe('23px');
        expect(window.getComputedStyle(headerH5).marginTop).toBe('20px');
      });
    });