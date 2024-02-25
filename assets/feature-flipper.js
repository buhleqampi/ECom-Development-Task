

        document.addEventListener('DOMContentLoaded', function () {
            const featurePoints = document.querySelector('.feature-points');
        
            if (featurePoints) {
            const points = document.querySelectorAll('.feature-point');
            let index = 0;
        
            setInterval(() => {
                points[index].classList.remove('active');
                index = (index + 1) % points.length;
                points[index].classList.add('active');
            }, 5000); // Change interval as needed
            }
        });
        