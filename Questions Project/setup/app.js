// traversing the dom
/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn)
{
	btn.addEventListener('click', function(e) // e is the event object
	{
		const question = e.currentTarget.parentElement.parentElement;
		question.classList.toggle('show-text');
	});
});
*/
/* 
 2nd approach using selectors inside the element
*/
const questions = document.querySelectorAll('.question');

questions.forEach(function(question)
{
	const btn = question.querySelector('.question-btn');

	btn.addEventListener("click",function()
	{
		questions.forEach(function(qtn){
			if (qtn !== question)
			{
				qtn.classList.remove('show-text');
			}
		});

		question.classList.toggle('show-text');
	});
});
