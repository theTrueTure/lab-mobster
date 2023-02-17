import './style.css';

// This is how we got the data, but i couldnt access to the backend properly
// so the "mobName.mobs.mobs"and "members.mobMembers...." maybe they are not correct
// but you can check in the inspect
// I add some style(not pretty) to the page in case you dont have timee today!
// the fetch of the mob will only work with one mob because we didnt implement mobs/id

const getMob = async () => {
	const getMobData = await fetch(
		'https://lab-mobster-backend-production.up.railway.app/mobs'
	);
	const mobName = await getMobData.json();
	console.log(mobName);

	const getMembersData = await fetch(
		'https://lab-mobster-backend-production.up.railway.app/mobs/1676464991028/members'
	);
	const members = await getMembersData.json();
	console.log(members.mobMembers);

	document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="main-section"
    <h2 class="main-section__main-title">${mobName.mobs.mobs[1]}</h2>
    <ul class="main-section__list">
      <li class="main-section__list__element">${members.mobMembers.membersList[0]}</li>
      <li class="main-section__list__element">${members.mobMembers.membersList[1]}</li>
      <li class="main-section__list__element">${members.mobMembers.membersList[2]}</li>
      <li class="main-section__list__element">${members.mobMembers.membersList[3]}</li>
    </ul>
  </section>
  `;
};

getMob();
