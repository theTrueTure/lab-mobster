import './style.css';

const getMob = async () => {
  const getMobData = await fetch(
    'https://lab-mobster-backend-production.up.railway.app/mobs',
  );
  const mobName = await getMobData.json();

  const getMembersData = await fetch(
    'https://lab-mobster-backend-production.up.railway.app/members/',
  );
  const members = await getMembersData.json();

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="main-section">
    <h2 class="main-section__main-title">${mobName.mobs.mobs[0].name}</h2>
    <ul class="main-section__list">
      <li class="main-section__list__element">${members.members[0].name}</li>
      <li class="main-section__list__element">${members.members[1].name}</li>
      <li class="main-section__list__element">${members.members[2].name}</li>
      <li class="main-section__list__element">${members.members[3].name}</li>
    </ul>
  </section>
  `;
};

getMob();
