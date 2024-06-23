import petHelper from '@util/petHelper';
import mathHelper from '@util/math';
import SaveGameData, {PetData} from '@app/SaveGameData';
import Decimal from 'break_infinity.js';

interface ScoreSectionProps {
    data: SaveGameData & { petDamageBD?: Decimal },
    group: PetData[],
    totalScore: string,
    defaultRank: number,
}

export function ScoreSection({ data, group, totalScore, defaultRank }: ScoreSectionProps) {
    const {
        baseGroupScore,
        groupScoreMax,
        dmgCount,
        timeCount,
        synergyBonus,
        groupScore,
        groupRankScore,
    } = petHelper.calculateGroupScore(group, defaultRank);

    // const displayedDamage = (score * 5 * data.PetDamageBonuses).toExponential(2);
    const displayedDamage = mathHelper.multiplyDecimal(data.petDamageBD, groupRankScore * 5).toExponential(2);

    return (
        <>
            <ul>
                {/* <li key="totalScore">
                    {`True Damage: ${(5 * groupScoreMax * Number(data?.PetDamageBonuses)).toExponential(2)}`}
                </li> */}
                <li key="totalScore">
                    {`Per Rank Damage: ${displayedDamage}`}
                </li>
                <li key="baseGroupScore">
                    Group Base: {Number(baseGroupScore).toExponential(2)}
                </li>
                <li key="damageBonus">
                    Dmg Bonus: {Number(1 + dmgCount * petHelper.EXP_DMG_MOD).toFixed(2)}x
                </li>
                <li key="timeBonus">
                    Time Bonus: {Number(1 + timeCount * petHelper.EXP_TIME_MOD).toFixed(2)}x
                </li>
                <li key="synergyBonus">
                    Synergy: {Number(synergyBonus).toFixed(2)}x
                </li>
                <li key="petDamageBonus">
                    {/* PetDmgMod: {Number(data?.PetDamageBonuses).toExponential(2)} */}
                    PetDmgMod: {data?.petDamageBD.toExponential(2)}
                </li>
            </ul>
        </>
    );
}
