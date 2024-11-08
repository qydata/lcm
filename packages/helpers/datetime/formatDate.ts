import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/zh-cn'; // 引入中文语言包

dayjs.locale('zh-cn'); // 设置为中文
dayjs.extend(relativeTime);

/**
 * Formats a date as a string in the format used by the application.
 * @param date The date to format.
 * @returns A string in the application date format.
 */
const formatDate = (date: Date | string, format = "YYYY, MMMM D ") => {
  return dayjs(new Date(date)).format(format);
};

export default formatDate;
